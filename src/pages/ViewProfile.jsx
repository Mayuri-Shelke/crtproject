import ProfileView from '../components/ProfileView';

const dummyProfile = {
  name: 'John Doe',
  description: 'Aspiring developer and tech enthusiast.',
  profilePic: 'https://via.placeholder.com/100',
  bgImage: 'https://via.placeholder.com/600x200',
  education: {
    tenth: { school: 'ABC School', year: '2015', cgpa: '9.2' },
    twelfth: { school: 'XYZ School', year: '2017', cgpa: '8.8' },
    graduation: { college: 'Tech University', year: '2021', cgpa: '9.0' },
  },
};

export default function ViewProfile() {
  return <ProfileView profile={dummyProfile} />;
}
