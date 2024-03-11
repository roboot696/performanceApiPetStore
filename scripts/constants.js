// constants.js

export const host = "petstore-service";
export const port = 8080;
export const petService = "/pet";
export const storeService = "/store";
export const storeOrderService = `${storeService}/order`;
export const userService = "/user";
export const apiVersion = "/api/v3"
export const payload = JSON.stringify({
  id: 1,
  name: 'doggie',
  category: { id: 1, name: 'Dogs' },
  photoUrls: ['string'],
  tags: [{ id: 1, name: 'string' }],
  status: 'available',
});
const payloadLogin = JSON.stringify({
  username: 'theUser',
  password: '12345',
});

