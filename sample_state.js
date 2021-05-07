{
    entities: { 
        users: {
            1: {
                id: 1,
                username: 'andyle',
                first_name: 'Andy',
                last_name: 'Le',
                birthday: 06/02/1996,
                bio: 'I love coding!',
                education: 'California Polytechnic State University',
                hometown: 'San Francisco',
                relationship: 'Taken',
                websites: 'www.mywebsite.com',
                social_links: 'instagram.com/andyle'
            },
            2: {
                id: 2,
                username: 'amyguan',
                first_name: 'Amy',
                last_name: 'Guan',
                birthday: '',
                bio: '',
                education: '',
                hometown: '',
                relationship: '',
                websites: '',
                social_links: ''
            }
        },
        posts: {
            1: {
                id: 1,
                body: 'BookOfFaces is so cool!',
                author_id: 1
            }
        },
        comments: {
            1: {
                id: 1,
                author_id: 2,
                post_id: 1,
                body: "You're right, BookOfFaces is cool!"
            }
        },
        friends: {
            1: {
                id: 1,
                adder_friend: 1,
                accepter_friend: 2
            }
        }
    },

    session: {
        id: 1, 
        username: 'andyle'
    },

    errors: {
        userErrors: ['not sure what to put here yet'],
        sessionErrors: ['Invalid username or password'],
        postErrors: ['not sure what to put here yet']
    }
}