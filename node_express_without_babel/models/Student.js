import mongoose from "mongoose";

// defining schema

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: 18,
        max: 50
    },
    fees: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 500
    },
    isActive: {
        type: Boolean
    },
    hobbies: {
        type: Array
    },
    comments: [
        {
            value: {
                type: String
            },
            publish: {
                type: Date,
                default: Date.new
            }
        }
    ],
    join: {
        type: Date,
        default: Date.now
    }
});

// studentSchema.path('age')

const studentModel = mongoose.model('Student', studentSchema);

// export default studentModel;

const createDoc = async () => {
    try {
        const studentDoc = new studentModel({
            name: 'umar',
            age: 23,
            fees: 688,
            isActive:  true,
            hobbies: ['reading', 'traveling'],
            comments: [
                {
                    value: 'good'
                }
            ],
        
        })

        const teacherDoc = new studentModel({
            name: 'sofik',
            age: 33,
            fees: 65588,
            isActive:  true,
            hobbies: ['reading', 'traveling'],
            comments: [
                {
                    value: 'good teacher'
                }
            ],
        
        })

        // for single document save this way
        // await studentDoc.save();

        // for insertMany document save this way
        await studentModel.insertMany([studentDoc, teacherDoc]);

    } catch (error) {
        console.log(error)
    }
}

// Retrieve All Document
const getAllDoc = async () => {
    try {
        const allData = await studentModel.find();
        console.log(allData)
    } catch (error) {
        console.log(error)
    }
}

// // Retrieve All document with specific fields
// const getSpecificDoc = async () => {
//     try {
//         // const allData = await studentModel.find().select('name age'); // include
//         // const allData = await studentModel.find().select({name: 1,  age: 1}); // include

//         // const allData = await studentModel.find().select('-name -age'); // exclude

//         const allData = await studentModel.find().select({name: 0, age: 0}); // exclude

//         console.log(allData)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Retrieve single document
const getSpecificDoc = async () => {
    try {
        const allData = await studentModel.findById('62f88bc4227a01cd742c17ae');

        console.log(allData)
    } catch (error) {
        console.log(error)
    } 
}



// update document
const updateDocument = async () => {
    try {
        // method one //
        // const updateDoc = await studentModel.findByIdAndUpdate('62f88bc4227a01cd742c17ae', {name: 'new umar faruk'}, {returnDocument: 'after'});

        // method two //
        const updateDoc = await studentModel.updateOne({_id: '62f88bc4227a01cd742c17ae'}, {name: 'shakib khan'}, {returnDocument: 'after'});

        console.log(updateDoc)
    } catch (error) {
        console.log(error);
    }
}


// Delete document
const deleteDoc = async () => {
    try {
        // const deleteDoc = await studentModel.findByIdAndDelete('62f88c0f6e8990994d95fbd7');

        const deleteDoc = await studentModel.deleteOne({_id: '62f88bc4227a01cd742c17ae'});
        
        console.log(deleteDoc);
    } catch (error) {
        console.log(error);
    }
}

export { getAllDoc, createDoc, getSpecificDoc, updateDocument, deleteDoc};





