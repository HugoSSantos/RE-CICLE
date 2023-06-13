-- CreateTable
CREATE TABLE "Central" (
    "id_central" TEXT NOT NULL PRIMARY KEY,
    "razao_social" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Quadrante" (
    "id_quadrante" TEXT NOT NULL PRIMARY KEY,
    "quadrante" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "pontuacao" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Catador" (
    "id_catador" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "CPF" TEXT,
    "CEP" INTEGER,
    "endereco" TEXT,
    "numero" INTEGER,
    "centralId" TEXT NOT NULL,
    "quadranteId" TEXT NOT NULL,
    CONSTRAINT "Catador_centralId_fkey" FOREIGN KEY ("centralId") REFERENCES "Central" ("id_central") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Catador_quadranteId_fkey" FOREIGN KEY ("quadranteId") REFERENCES "Quadrante" ("id_quadrante") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Central_CNPJ_key" ON "Central"("CNPJ");

-- CreateIndex
CREATE UNIQUE INDEX "Catador_CPF_key" ON "Catador"("CPF");
