import * as path from "node:path";
import { Project } from "ts-morph";

const project = new Project();

project.addSourceFilesAtPaths(["src/**/*.tsx", "src/**/*.ts"]);

for (const file of project.getSourceFiles()) {
	for (const imp of file.getImportDeclarations()) {
		const moduleSpecifier = imp.getModuleSpecifierValue();

		if (moduleSpecifier.startsWith("@/components/")) {
			const name = moduleSpecifier.replace(
				"@/components/",
				"",
			);

			const relative =
				file.getRelativePathAsModuleSpecifierTo(
					path.resolve("src/components", name),
				);
			imp.setModuleSpecifier(relative);
		}
		if (moduleSpecifier === "@/lib/utils") {
			const relative =
				file.getRelativePathAsModuleSpecifierTo(
					path.resolve("src/lib/utils.ts"),
				);

			imp.setModuleSpecifier(relative);
		}
	}
}

project.saveSync();
