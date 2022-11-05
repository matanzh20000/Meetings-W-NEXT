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

function HomePage(props) {
  return <Meetuplist meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}

export default HomePage;
