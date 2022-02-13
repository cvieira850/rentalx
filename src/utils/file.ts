import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {
    console.log("arquivo não encontrado para deleter");
    return;
  }

  await fs.promises.unlink(filename);
};
