export const emailNewsletterSignup = `
    mutation emailNewsletterSignup(
        $email: String!
        $frequency: String!
        $category: String!
        $ipAddress: String!
    ) {
        emailNewsletterSignup(
            email: $email
            frequency: $frequency
            category: $category
            ipAddress: $ipAddress
        )
    }
`;
