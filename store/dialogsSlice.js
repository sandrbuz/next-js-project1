import { createSlice } from '@reduxjs/toolkit';



export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState: {
    messages: {
      Dima: [
        { message: 'Hi', whoseMess: 's.right', id: 1, key: 1 },
        { message: 'How is your mood', whoseMess: "s.left", id: 2, key: 2 },
        { message: "i'm fine, thanks", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'Yo', whoseMess: "s.left", id: 4, key: 4 },
        { message: "I'm glad to hear you", whoseMess: "s.right", id: 5, key: 5 },
        { message: "Rerum quibusdam doloribus  non.", whoseMess: "s.left", id: 6, key: 6 },
        { message: "Rerum quibusdam doloribus doloremque .", whoseMess: "s.right", id: 7, key: 7 },
        { message: "Rerum quibusdam doloribus doloremque non.", whoseMess: "s.left", id: 8, key: 8 },
        { message: " doloribus doloremque non.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "Rerum quibusdam doloribus doloremque non.", whoseMess: "s.left", id: 10, key: 10 },
      ],
      Andrey: [
        { message: 'Hey there!', whoseMess: 's.right', id: 1, key: 1 },
        { message: 'What are you up to?', whoseMess: "s.left", id: 2, key: 2 },
        { message: "Just chilling, you?", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'Thinking about going for a walk.', whoseMess: "s.left", id: 4, key: 4 },
        { message: "That sounds nice. It's a beautiful day outside.", whoseMess: "s.right", id: 5, key: 5 },
        { message: "I wish I could join you, but I'm stuck with work.", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'Don\'t worry, we can plan something for the weekend.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'Sure, that sounds like a plan.', whoseMess: "s.left", id: 8, key: 8 },
        { message: "Great! Let's catch up later then.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "Absolutely. Take care!", whoseMess: "s.left", id: 10, key: 10 },
      ],
      Sveta: [
        { message: 'Good morning!', whoseMess: 's.right', id: 1, key: 1 },
        { message: 'Morning! How did you sleep?', whoseMess: "s.left", id: 2, key: 2 },
        { message: "Not too bad, thanks for asking.", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'I had a bit of trouble falling asleep.', whoseMess: "s.left", id: 4, key: 4 },
        { message: "Maybe try some relaxation techniques before bed.", whoseMess: "s.right", id: 5, key: 5 },
        { message: "Yeah, I'll give that a shot tonight.", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'Let me know if it helps.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'Will do. Thanks!', whoseMess: "s.left", id: 8, key: 8 },
        { message: "No problem. Have a great day!", whoseMess: "s.right", id: 9, key: 9 },
        { message: "You too!", whoseMess: "s.left", id: 10, key: 10 },
      ],
      Sasha: [
        { message: 'Hey, how\'s it going?', whoseMess: 's.right', id: 1, key: 1 },
        { message: "Hey! I'm doing well, thanks.", whoseMess: "s.left", id: 2, key: 2 },
        { message: "That's good to hear.", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'What about you?', whoseMess: "s.left", id: 4, key: 4 },
        { message: "I'm just relaxing at home.", whoseMess: "s.right", id: 5, key: 5 },
        { message: "Sounds nice. Anything planned for today?", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'Not really, just taking it easy.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'That sounds like a good day.', whoseMess: "s.left", id: 8, key: 8 },
        { message: "Yeah, I need some downtime.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "Absolutely. Enjoy!", whoseMess: "s.left", id: 10, key: 10 },
    ]
    }
  },
  reducers: {
    addMsg: (state,action) => {
      const newId = state.messages.Dima.length + 1
      const newMessage = { message: action.payload, whoseMess: "s.right", id: newId, key: newId}
      state.messages.Dima.push(newMessage)
    },
  },
});

export const { addMsg } = dialogsSlice.actions;