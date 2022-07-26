import { useEffect, useState } from "react";
import MeetupList from "../components/Meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(
    () => {
      setIsLoading(true);
      fetch(
        "https://react-meetups-49209-default-rtdb.firebaseio.com/meetups.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };

            meetups.push(meetup)
          }

          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
    },
    [
      // no external deps used, therefore empty deps array
    ]
  );

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
