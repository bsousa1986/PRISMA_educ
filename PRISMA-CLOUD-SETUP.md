# PRISMA — ativar a Drive sincronizada

A interface da Drive já está integrada no PRISMA. Para transformar o modo de demonstração em armazenamento real multiutilizador:

1. Criar um projeto em Supabase.
2. No SQL Editor, executar `prisma-supabase-setup.sql`.
3. Em `prisma-supabase-config.js`, colocar:
   - URL do projeto
   - Publishable Key
4. Em Authentication, ativar Email/OTP (magic link) e configurar o URL de redirecionamento para o endereço GitHub Pages do PRISMA.
5. Publicar novamente.

O frontend usa apenas a publishable key. Nunca colocar uma service_role/secret key no GitHub.

## Modelo de acesso

- **Meu Drive:** privado por defeito, isolado pelo `auth.uid()`.
- **Biblioteca PRISMA:** só aparecem materiais cujo proprietário escolheu `Partilhar`.
- **Partilha:** pode ser retirada a qualquer momento.
- **Direitos:** a interface pede licença/direito de partilha antes da publicação comunitária.
- **Ficheiros:** ficam no bucket privado `prisma-materials`; o acesso é controlado por políticas RLS.

O modelo segue a autenticação e o Row Level Security do Supabase. A documentação oficial explica a criação do cliente no browser e a utilização de RLS para controlar o acesso por utilizador.
