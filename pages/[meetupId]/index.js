import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="A first Meeting"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg",
        id: "m1",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is the first meetup",
      },
    },
  };
}

export default MeetupDetails;
