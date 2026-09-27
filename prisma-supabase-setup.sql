-- PRISMA cloud drive — Supabase setup
-- Run this in Supabase SQL Editor before enabling the cloud drive.
create table if not exists public.prisma_materials (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  owner_name text,
  title text not null,
  description text default '',
  module_id text default '',
  topic text default '',
  material_type text default 'Outro',
  year_level text default '',
  tags text[] default '{}',
  file_path text,
  file_name text,
  mime_type text,
  file_size bigint,
  source_url text,
  is_shared boolean not null default false,
  license text default '',
  status text not null default 'published' check (status in ('published','pending','removed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists prisma_materials_owner_idx on public.prisma_materials(owner_id);
create index if not exists prisma_materials_shared_idx on public.prisma_materials(is_shared,status);

alter table public.prisma_materials enable row level security;

drop policy if exists "owners read own materials" on public.prisma_materials;
create policy "owners read own materials" on public.prisma_materials
for select to authenticated using (owner_id = auth.uid());

drop policy if exists "community read shared materials" on public.prisma_materials;
create policy "community read shared materials" on public.prisma_materials
for select to authenticated using (is_shared = true and status = 'published');

drop policy if exists "owners insert materials" on public.prisma_materials;
create policy "owners insert materials" on public.prisma_materials
for insert to authenticated with check (owner_id = auth.uid());

drop policy if exists "owners update materials" on public.prisma_materials;
create policy "owners update materials" on public.prisma_materials
for update to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "owners delete materials" on public.prisma_materials;
create policy "owners delete materials" on public.prisma_materials
for delete to authenticated using (owner_id = auth.uid());

grant select,insert,update,delete on public.prisma_materials to authenticated;

insert into storage.buckets (id,name,public)
values ('prisma-materials','prisma-materials',false)
on conflict (id) do nothing;

drop policy if exists "owners upload prisma materials" on storage.objects;
create policy "owners upload prisma materials" on storage.objects
for insert to authenticated
with check (bucket_id='prisma-materials' and (storage.foldername(name))[1] = (select auth.uid()::text));

drop policy if exists "owners read prisma materials" on storage.objects;
create policy "owners read prisma materials" on storage.objects
for select to authenticated
using (bucket_id='prisma-materials' and owner_id = auth.uid());

drop policy if exists "community read shared prisma materials" on storage.objects;
create policy "community read shared prisma materials" on storage.objects
for select to authenticated
using (
  bucket_id='prisma-materials'
  and exists (
    select 1 from public.prisma_materials m
    where m.file_path = name
      and m.is_shared = true
      and m.status = 'published'
  )
);

drop policy if exists "owners delete prisma materials" on storage.objects;
create policy "owners delete prisma materials" on storage.objects
for delete to authenticated
using (bucket_id='prisma-materials' and owner_id = auth.uid());

drop policy if exists "owners update prisma materials" on storage.objects;
create policy "owners update prisma materials" on storage.objects
for update to authenticated
using (bucket_id='prisma-materials' and owner_id = auth.uid())
with check (bucket_id='prisma-materials' and owner_id = auth.uid());
