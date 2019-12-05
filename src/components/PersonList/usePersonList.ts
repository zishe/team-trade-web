import { useState, useEffect } from 'react';
import { GroupService } from '../../services';

export const usePersonList = (): {
    loading: boolean;
    error: any;
    people: Array<any>;
} => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [people, setPeople] = useState<Array<any>>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const people = await GroupService.fetchPeople();

                // Sort by name
                people.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
                setPeople(people);
                setLoading(false);
            } catch (e) {
                setError(e);
            }
        };

        fetchData();
    }, []);

    return { loading, error, people };
};
