-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalInformation" (
    "id" TEXT NOT NULL,

    CONSTRAINT "PersonalInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workExperience" (
    "id" TEXT NOT NULL,

    CONSTRAINT "workExperience_pkey" PRIMARY KEY ("id")
);
