import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();

  const handleAddMeetup = (meetupData) => {
    const response = fetch(
      "https://react-meetups-49209-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });

    return response;
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetupPage;
