const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String,
    userGroceryData: [{
      data: [ String ],
      savedDate: Date,
      savedLocation: String,
      dataStartDate: String,
      dataEndDate: String
    }],
    userParksData: [{
      data: [ String ],
      savedDate: Date,
      savedLocation: String,
      dataStartDate: String,
      dataEndDate: String
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
