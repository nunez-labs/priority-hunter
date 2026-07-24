import { execSync } from "node:child_process";

const component = process.argv[2];

if (!component) {
  console.error("Uso: pnpm shadcn:add <componente>");
  console.error("Ejemplo: pnpm shadcn:add sidebar");
  process.exit(1);
}

try {
  console.log(`Añadiendo componente: ${component}`);

  execSync(
    `pnpm dlx shadcn@latest add ${component}`,
    {
      stdio: "inherit",
    }
  );

  console.log("Corrigiendo imports...");

  execSync(
    "tsx scripts/fix-shadcn-imports.ts",
    {
      stdio: "inherit",
    }
  );

  console.log("Componente añadido correctamente");
} catch (error) {
  console.error("Error añadiendo componente");
  process.exit(1);
}
