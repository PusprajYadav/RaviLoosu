export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  // typescript: "5.0.3",
  // csharp: "6.12.0",
  // php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Welcome to Bluink 360");\n}\n\ngreet("Bluink360");\n`,
  python: `\ndef greet(name):\n\tprint("Welcome to Bluink 360")\n\ngreet("Bluink360")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Welcome to Bluink 360");\n\t}\n}\n`,
  // typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Welcome to Bluink 360");\n}\n\ngreet({ name: "Alex" });\n`,
  // csharp:
  // 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  // php: "<?php\n\n$name = 'Alex';\necho $name;\n",
};
