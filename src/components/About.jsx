import profile from "../data/profile";

const About = () => {
  return (
    <div className="container px-6 mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-12 mb-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={profile.image}
              alt={profile.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-12">
          <h1 className="mb-2 text-3xl font-light tracking-wide md:text-4xl">
            {profile.name}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">{profile.title}</p>

          <div className="prose prose-neutral max-w-none">
            {profile.biography.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-3xl mb-24">
        <h2 className="mb-6 text-sm tracking-wider uppercase text-muted-foreground">
          Philosophy
        </h2>
        <div className="prose prose-neutral max-w-none">
          {profile.philosophy.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Education & Awards */}
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-sm tracking-wider uppercase text-muted-foreground">
            Education
          </h2>
          <ul className="space-y-4">
            {profile.education.map((edu, index) => (
              <li key={index} className="text-sm">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-muted-foreground">
                  {edu.institution}, {edu.year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-sm tracking-wider uppercase text-muted-foreground">
            Awards
          </h2>
          <ul className="space-y-4">
            {profile.awards.map((award, index) => (
              <li key={index} className="text-sm">
                <p className="font-medium">{award.title}</p>
                <p className="text-muted-foreground">{award.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
