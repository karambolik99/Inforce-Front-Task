const initialState = {
  products: [
    {
      id: 1,
      imageUrl:
        "https://media.happysocks.com/catalog/product/m/a/magentoimage_kmkyur1kxc8roymw.png?width=720&format=pjpg&quality=70&auto=webp&bg-color=fafafa",
      name: "3-pack Palm No Show Sock",
      count: 4,
      size: 43,
      comments: ["CommentModel", "CommentModel"],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default reducer;
