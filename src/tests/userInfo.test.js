
const getUserByUsername = async (username) => {
    if (!username) {
        return null;
    }
    
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    
    return data;
}    

const getRepositoryByUsername = async ( username ) => {
    if (!username) {
        return null;
    }

    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    return data;
};


test('profile of Awesome loaded correctly', () => {
    expect(getUserByUsername("awesome")).toBeDefined();
});

test('repositories of Awesome loaded correctly', () => {
    expect(getRepositoryByUsername("awesome")).toBeDefined();
});

test('profile of undefined user loaded correctly', () => {
    expect(getUserByUsername("adsfdfdsfdsfdss").message).toBeUndefined();
}); 

test('repositories of undefined user loaded correctly', () => {
    expect(getRepositoryByUsername("adsfdfdsfdsfdssdae").message).toBeUndefined();
});
