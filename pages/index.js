import Meetuplist from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "Our First Meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg",
    address: "Some Address 10, 12345 Some City",
    description: "Our Second Meetup",
  },
];

function HomePage() {
  return <Meetuplist meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
