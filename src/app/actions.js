//you can make a component here for user authentication, then import it into page.js

//PROTECT YOUR ACTIONS WITH AUTH

// import { auth } from '@clerk/nextjs/server';

// export default function AddToCart() {
//   async function addItem(formData) {
//     'use server';
//     const { userId } = auth();
//     if (!userId) {
//       throw new Error('You must be signed in to add an item to your cart');
//     }
//     console.log('add item server action', formData);
//   }

//   return (
//     <form action={addItem}>
//       <input
//         value={'test'}
//         type='text'
//         name='name'
//       />
//       <button type='submit'>Add to Cart</button>
//     </form>
//   );
// }

//ACCESSING THE CURRENT USER

import { currentUser } from "@clerk/nextjs/server";

export default function AddHobby() {
  async function addHobby(formData) {
    "use server";
    const user = await currentUser();

    if (!user) {
      throw new Error("You must be signed in to use this feature");
    }

    const serverData = {
      usersHobby: formData.get("hobby"),
      userId: user.id,
      profileImage: user.imageUrl,
    };

    console.log(
      "add item server action completed with user details ",
      serverData
    );
  }

  return (
    <form action={addHobby}>
      <h3>Share your hobby!</h3>
      <input placeholder="hobby" type="text" name="hobby" required />
      <button type="submit">Submit your hobby</button>
    </form>
  );
}
