import profile from "../data/profile";

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-2 text-sm text-muted-foreground">Contact</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="mb-2 text-sm text-muted-foreground">Location</p>
            <p className="text-sm">{profile.location}</p>
          </div>

          <div>
            <p className="mb-2 text-sm text-muted-foreground">Social</p>
            <div className="flex gap-4">
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-60"
              >
                Instagram
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 ">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
