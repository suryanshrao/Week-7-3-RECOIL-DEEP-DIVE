import {atom, selector} from "recoil"

export const networkAtom = atom({
    key : "networkAtom",
    default : 120
})

export const jobsAtom  = atom({
    key : "jobsAtom",
    default : 0
})

export const mesageAtom = atom({
    key : "messageAtom",
    default : 1,
})

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : 12
})

export const totalNotifications = selector({
    key : "totalNotifications",
    get : ({get}) => {
        const networkCount = get(networkAtom);
        const jobCount = get(jobsAtom);
        const messageCount = get(mesageAtom);
        const notificationsCount = get(notificationsAtom);
        return networkCount + jobCount + messageCount + notificationsCount;
    }
})