// const fs = require('fs/promises');
import * as fs from 'fs/promises';

/////// PROMISE BASED API ////////////////////////

// Creating Directory - Path should be there

// try {
//     await fs.mkdir('/home/umar/Desktop/web_development/node_restart/node_1/demo')
//     console.log('directory created')
// } catch (error) {
//     console.log(error);
// }

// Creating Directory - Path is not required to be there

// try {
//     await fs.mkdir('/home/umar/Desktop/web_development/node_restart/node_1/test/demo', {recursive: true})
//     console.log('directory created')
// } catch (error) {
//     console.log(error);
// }


// Read Content of  Directory

// try {
//     const files = await fs.readdir('/home/umar/Desktop/web_development/node_restart/node_1/demo');
//     console.log(files[0])

// } catch (error) {
//     console.log(error)
// }


// Remove Directory directory should be empty

// try {
//      await fs.rmdir('/home/umar/Desktop/web_development/node_restart/node_1/test/demo');
    
// } catch (error) {
//     console.log(error)
// }

// Create and write files

// try {
//     await fs.writeFile('/home/umar/Desktop/web_development/node_restart/node_1/test/text.txt', 'new member');
   
// } catch (error) {
//    console.log(error)
// }


// read file

// try {
//    const files = await fs.readFile('/home/umar/Desktop/web_development/node_restart/node_1/test/text.txt', 'utf-8');
//    console.log(files)
// } catch (error) {
//    console.log(error)
// }

// // append file

// try {
//      await fs.appendFile('/home/umar/Desktop/web_development/node_restart/node_1/test/text.txt',' new text add');
//  } catch (error) {
//     console.log(error)
//  }


// // copy file

// try {
//     await fs.copyFile('/home/umar/Desktop/web_development/node_restart/node_1/test/text.txt', '/home/umar/Desktop/web_development/node_restart/node_1/demo/test.txt');
// } catch (error) {
//    console.log(error)
// }


// get file information

// try {
//     const stats = await fs.stat('/home/umar/Desktop/web_development/node_restart/node_1/demo/test.txt');
//     console.log(stats.isDirectory())
// } catch (error) {
//    console.log(error)
// }



/////// CALLBACK BASED API ////////////////////////////////

// fs.mkdir('/home/umar/Desktop/web_development/node_restart/node_1/test2', (error) => {
//     if (error) throw error;
//     console.log('creating directory')
// })


// fs.readdir('/home/umar/Desktop/web_development/node_restart/node_1/demo', (files) => {
//     // if (error) throw error;
//     console.log(files, 'jjjjj')
// })



/////// sync BASED API ////////////////////////////////

// fs.mkdirSync('/home/umar/Desktop/web_development/node_restart/node_1/test2', (error) => {
//     if (error) throw error;
//     console.log('creating directory')
// })
