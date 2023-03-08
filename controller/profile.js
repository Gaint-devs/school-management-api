import prisma from "../lib/prisma.js";

export const createProfile = async (payload) => {
    const newProfile = await prisma.profile.create({
        data: {
            name: payload.name,
            gender: payload.gender,
            age: payload.age,
            userId: payload.userId,
        }
    })
    return newProfile;
};
export const getProfile = async() => {
    const profiles = await prisma.profile.findMany();
    return profiles;
}