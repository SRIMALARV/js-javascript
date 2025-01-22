let marks = [10, 20, 30, 40, 50];

export const pubsub = {
  events: {},

  subscribe: (event, callback) => {
    if (!pubsub.events[event]) {
      pubsub.events[event] = [];
    }
    const index = pubsub.events[event].push(callback) - 1;
    return { event, index };
  },

  unsubscribe: ({ event, index }) => {
    if (pubsub.events[event] && pubsub.events[event][index]) {
      pubsub.events[event].splice(index, 1);
    }
  },

  publish: (event, data) => {
    if (pubsub.events[event]) {
      pubsub.events[event].forEach((callback) => callback(data));
    }
  },
};

export const resetMarks = () => {
  marks = [10, 20, 30, 40, 50]; 
};

export { marks };
