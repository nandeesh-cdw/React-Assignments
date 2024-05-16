import { memberActions } from "../../store/store";
import { APP_CONSTANTS } from "../constants/APP_CONSTANTS";

export const fetchMembers = async (dispatch) => {
    try {
        const response = await fetch('https://jsonmockserver.vercel.app/api/users');
        if(!response.ok){
            console.log("Error fetching Members");
        }
        const membersData = await response.json();
        const data = membersData.map((member) => {
            const newMember = {...member, photo: APP_CONSTANTS.IMAGE_BASE_URL + member.photo}
            return newMember;
        })
        dispatch(memberActions.setMembersData(data));
    } catch(err){
        console.log('Error fetching Members');
    }
}