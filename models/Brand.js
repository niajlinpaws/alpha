var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var brandSchema = new Schema({
	name:String,
	qty:{
		type: Number,
		default:0
	},
	isArchive: {
		type: Boolean,
		default: false
	}
},
{
	timestamps: {
		createdAt: 'created',
		updatedAt: 'updated'
	},
	id: false,
	toJSON: {
		getters: true,
		virtuals: true
	},
	toObject: {
		getters: true,
		virtuals: true
	}
});

module.exports = mongoose.model('Brand', brandSchema)