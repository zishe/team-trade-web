import axios from 'axios';
import { Group } from '../models';

const api = process.env.REACT_APP_API_URL;

/**
 * Map group received from server to domain
 * @param group
 */
const mapGroupToDomain = (group: any): Group => {
    const { id, name } = group;

    return {
        id,
        name
    };
};

async function fetchPeople(): Promise<Array<Group>> {
    const resp = await axios.get(`${api}/groups`);
    const data = resp.data;

    // Convert to application domain and return
    return data.map((group: any) => mapGroupToDomain(group));
}

export const GroupService = {
    fetchPeople
};
