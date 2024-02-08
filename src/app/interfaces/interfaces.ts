export interface CreateCustomerForm {
    customerNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    address: Address;
}

export interface Address {
    street: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    country: string;
}