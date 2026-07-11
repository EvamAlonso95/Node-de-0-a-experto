import fs from "fs";
import { SaveFile } from "../../../src/domain/use-cases/save-file.use-case";
// import { SaveFile } from "../src/domain/use-cases/save-file.use-case"

describe("SaveFileUseCase", () => {
  const customOptions = {
    fileContent: "custom content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    const outputFolferExists = fs.existsSync("outputs");
    if (outputFolferExists) fs.rmSync("outputs", { recursive: true });
    const outputCustomFolferExists = fs.existsSync(
      customOptions.fileDestination,
    );
    if (outputCustomFolferExists)
      fs.rmSync(customOptions.fileDestination, { recursive: true });
  });

  test("should save file with default values", () => {
    const saveFile = new SaveFile();

    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "test content",
    };
    const result = saveFile.execute(options);

    const checkFile = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("should save file with custom values", () => {
    const saveFile = new SaveFile();
    const result = saveFile.execute(customOptions);

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;
    const checkFile = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test("should return false if directory could not be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("error");
    });
    const result = saveFile.execute(customOptions);
    expect(result).toBe(false);
    mkdirSpy.mockRestore();
  });

  test("should return false if file could not be created", () => {
    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("error");
    });
    const result = saveFile.execute(customOptions);
    expect(result).toBe(false);
    writeFileSpy.mockRestore();
  });
});
