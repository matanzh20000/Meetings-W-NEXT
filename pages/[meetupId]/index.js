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

export default MeetupDetails;
