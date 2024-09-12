export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Saarthi
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
            In today’s competitive job market, students often struggle to find reliable resources to prepare for interviews.
             Saarthi is a platform designed to bridge this gap by enabling students from different universities to share their 
             interview experiences and insights. Saarthi empowers students to access real-world interview tips, helping them prepare
             more effectively for placements.
            </p>

            <p>
            The platform is built using the MERN stack, with Firebase for real-time data management and JWT tokens for secure 
            authentication. It offers a user-friendly dashboard where students can post their experiences, read others' stories, 
            and explore interview patterns across industries. The iterative development process allowed continuous refinement based
             on user feedback, ensuring a seamless experience.
            </p>

            <p>
            Saarthi has proven to be highly effective in enhancing student preparation, promoting collaborative learning, 
            and creating a supportive community. By providing a platform for students to exchange valuable interview 
            insights, Saarthi helps close information gaps and boosts students' confidence as they navigate the recruitment process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
