const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models/User');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userInfo = await User.findOne({
                    _id: context.user._id
                });

                return userInfo;
            }

            throw new AuthenticationError('User needs to be logged in');
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const token = signToken(user);
            const user = await User.create(args);

            return { token, user };
        },

        login: async (parent, { password, email }) => {
            const user = await User.findOne({ email });
            const password = await User.isCorrectPassword(password);

            if (!user) {
                throw new AuthenticationError('No user found under this email');
            }

            if (!password) {
                throw new AuthenticationError('Password not correct');
            }

            const token = signToken(user);

            return { token, user };
        },

        saveBook: async (parent, { newBook }, context) => {
            if (context.user) {
                const updatedUser = await User.
            }
        }
    }
}
