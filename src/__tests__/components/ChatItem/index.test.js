import React from "react";
import { create } from "react-test-renderer";

import ChatItem from '../../../components/ChatItem';

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const mockMessages = [
  {
    avatar: null,
    email: "abakera@craigslist.org",
    fullName: "Amanda Baker",
    message: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    messageId: "fa0ca158-42ae-435d-8c32-13f4cb7b8de8",
    timestamp: 1456272088000,
    userId: "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
  },
  {
    avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    email: "awilliams8@indiegogo.com",
    fullName: "Aaron Williams",
    message: "Quisque ut erat. Curabitur gravida nisi at nibh.",
    messageId: "555f4e1b-90a6-4079-850d-54001f29ce44",
    timestamp: 1456481117000,
    userId: "c980934a-f54e-459e-8137-0ec3654cdafb",
  }
];

describe("ChatItem Component", () => {
  test("ChatItem without avatar Matches the snapshot", () => {
    const chatItem = create(<ChatItem {...mockMessages[0]}/>);
    expect(chatItem.toJSON()).toMatchSnapshot();
  });
  test("ChatItem with avatar Matches the snapshot", () => {
    const chatItem = create(<ChatItem {...mockMessages[1]}/>);
    expect(chatItem.toJSON()).toMatchSnapshot();
  });
});
