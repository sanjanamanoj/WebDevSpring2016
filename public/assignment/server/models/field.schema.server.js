/**
 * Created by Sanjanamanoj on 3/29/2016.
 */
module.exports = function(mongoose)
{
    // use mongoose to declare a user schema
    var FieldSchema = mongoose.Schema({
        label: String,
        type: {type: String, enum:['TEXT','EMAIL','PASSWORD','OPTIONS','DATE','RADIOS','CHECKBOXES'], default:'TEXT'},
        placeholder: String,
        options: [{label:String, value: String}]

    }, {collection: 'field'});
    return FieldSchema;
};