const fs = require("fs").promises;
const path = require("path");

const functionToRun = async () => {
  const promises = [];
  for (let i = 0; i < 10000; i++) {
    const filePath = path.join(__dirname, "example_files", `file${i}.txt`);
    const fileContents = `This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i} This is file #${i}`;
    //   // Method 1: synchronous (in series)
    //   //   fs.writeFileSync(filePath, fileContents);
    //   // Method 2: callback (in parallel)
    //   fs.writeFile(filePath, fileContents, () => {
    //     console.log("file was written");
    //   });
    // Method 3: promise (in parallel)
    const filePromise = fs.writeFile(filePath, fileContents);
    promises.push(filePromise);
  }
  await Promise.all(promises);
  console.log("done");
};

functionToRun();

// Callback Hell :(
// fs.writeFile(path.join(__dirname, "example_files", `file1.txt`), "1", () => {
//   console.log("file 1 was written");
//   fs.writeFile(path.join(__dirname, "example_files", `file2.txt`), "2", () => {
//     console.log("file 2 was written");
//     fs.writeFile(
//       path.join(__dirname, "example_files", `file3.txt`),
//       "3",
//       () => {
//         console.log("file 3 was written");
//         fs.writeFile(
//           path.join(__dirname, "example_files", `file4.txt`),
//           "4",
//           () => {
//             console.log("file 4 was written");
//             console.log("done (correct)");
//           }
//         );
//       }
//     );
//   });
// });

// console.log("done (incorrect)");
