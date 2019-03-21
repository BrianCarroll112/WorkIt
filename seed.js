const {
  Company,
  Job
} = require('./models');

const seed = async () => {
  try {
    const company1 = await Company.create({
      name: "Gambit Technologies",
      location: "New York, NY",
      about:`At Gambit Technologies, we take great pride in managing the relationship between qualified candidates and our industry-leading clients.
We'll work diligently to match you with the right opportunity, based on your experience, skill level and ideal work environment. If you're just leaving school or planning your next career move, our specialized technology teams can provide you with a free one-on-one resume and interview review.
You'll find our process both personal and efficient, geared to helping you take your next step without hassle or delay -- because it's our business to help you succeed.`,
      link: "https://www.gambitny.com/",
    });

    const company2 = await Company.create({
      name: "WeWork",
      location: "New York, NY",
      about:`WeWork is the platform for creators. We provide beautiful workspace, a global community, and meaningful business services to entrepreneurs, innovators, and forward-thinking companies. We're better together. Our team believes in the power of “we” and in the greater movement of global connectivity that we’re all a part of. We challenge convention, crush the status quo, and achieve amazing things through collaboration and a dedication to one another. Our unique culture is cultivated through company-wide events like Summer Camp and our annual Global Summit, and that contagious, positive energy permeates all our work days in-between.`,
      link: "https://www.wework.com/",
    });

    const company3 = await Company.create({
      name: "HubSpot",
      location: "Boston, MA",
      about: `HubSpot helps millions of organizations grow better, and we’d love to grow better with you. Our company culture builds connections, careers, and employee growth. How? By creating a workplace that values flexibility, autonomy, and transparency. If that sounds like something you’d like to be part of, we’d love to hear from you.`,
      link: "https://www.hubspot.com",
    });

    const company4 = await Company.create({
      name: "Drift",
      location: "Boston, MA",
      about: `Drift is the world's leading conversational marketing and sales platform that helps businesses connect now with the customers who are ready to buy now.

After just two years in the market, the company has become one of the fastest growing SaaS companies of all-time and was named to the Forbes Cloud 100, LinkedIn Top 50 Startups, Entrepreneur's Top Company Cultures, Boston Business Journal's Best Places to Work, and SaaS Company of the Year by the NEVCA.

Get started for free today and join 150,000+ businesses using Drift at www.drift.com.`,
      link: "https://www.drift.com",
    });

    const company5 = await Company.create({
      name: "ThoughtWorks",
      location: "Denver, CO",
      about: `We're a global technology consultancy & a community of passionate, purpose-led individuals. We think disruptively to deliver technology to address our clients' toughest challenges, all while seeking to revolutionize the IT industry & create positive social change. We're the 2016 & 2017 AnitaB.org winner for Top Company for Women Technologists.`,
      link: "https://www.readytalk.com",
    });

    const job1 = await Job.create({
      job_title: "Software Engineer",
      description: `Summary of the Junior Software Developer role This is a rare opportunity to join a highly-selective software company as an individual contributor or technical lead. Our client is a large software company with an awesome engineering culture and start-up feel, and they are currently hiring experienced backend software engineers to join an innovative research-driven team. Applicants from any industry may apply, but there is a strict requirement for experience with C++11, Python, Node.js Node.js or Scala in a real-time production environment ideally solving problems around distributed computing, scaling, caching, latency, concurrency, or massive data sets. Requirements for the Junior Software Developer 2+ years of C++11, Python, Node.js, or Scala Computer Science degree from a top tier program Passion for designing, building and implementing high performance applications Strong communication and problem solving skills Experience with streaming data preferred but not required Compensation at this firm is at the top of the industry, and candidates who make the cut can expect handsome increases. Submit your resume now and we'll get in touch promptly if it looks like a good fit. Good luck, and thanks!`,
      employee_status: "Full Time",
      salary: 80000,
      experience_level: "Junior",
      location: "New York, NY"
    });

    const job2 = await Job.create({
      job_title: "Web Developer",
      description: `The mission of Real Estate & Development (RedTech) is to enable our teams across real estate, architecture, design, construction, and project management with the most up to date technology. Our technology allows for a better ability to source new deals, close those deals, design and build more efficiently, and manage the construction process end to end. We're supporting the core business here in RedTech and would love to have you on the team! Are you someone with a strong creative streak? Do you enjoy fast paced exciting environments? Are you looking to contribute to making a real impact across many different communities and cultures around the world with the work that you're doing? If so, then we may have the opportunity for you.`,
      employee_status: "Full Time",
      salary: 75000,
      experience_level: "Junior",
      location: "New York, NY"
    });

    const job3 = await Job.create({
      job_title: "Web Developer",
      description: `We're looking for top engineering talent to join our small, customer-driven development teams to work on a variety of projects. At HubSpot, apps are owned and developed by small, autonomous, cross-functional teams. You and your team set the goals, set the timelines, build the software, go to user tests, and carry the pager. Instead of trying to fill specific titles, we hire talented people at all seniority levels and work with them to find the role that suits them best. If you like the sound of engineering at HubSpot, please apply here so we can learn more about you.`,
      employee_status: "Full Time",
      salary: 120000,
      experience_level: "Senior",
      location: "Boston, MA"
    });

    const job4 = await Job.create({
      job_title: "Software Engineer",
      description: `Senior Java Software Engineer - Entrepreneurial Tech Team (200K+) Senior Java Software Engineer is needed to join an entrepreneurial tech team in building out a revolutionary SaaS people analytics platform. The team is using Java, Scala, and open source technologies in addition to NLP, Machine Learning, and Data Science techniques to gather, analyze and distribute TBs - PBs of data to revolutionize learning and career development throughout the workforce. As a Senior Developer on the team, you will utilize Java, Scala and other cutting edge technologies in an AWS cloud environment for greenfield design and development of user facing applications. Responsibilities Design, develop and deploy large scale, distributed, multi-threaded applications using Java, Scala, and other open source technologies Build applications with usability, scale and security in mind Design and develop applications that ingest and process sophisticated data from numerous sources and provide complex analytics in real-time for end users Face off with users, stakeholders and other engineers to continuously provide the most efficient and seamless experience Requirements 3+ year s production level development experience utilizing Java or Scala Experience building RESTful APIs in addition to low level programming experience (multithreading, distributed caching, JVM tuning) Experience with data messaging, persistence, and caching using Kafka, Spark, SQL, Ignite, Elasticache, PrestoDB Exposure to or interest in Spark, AWS, ML, NLP, etc. B.S. or M.S. in Computer Science or related field`,
      employee_status: "Full Time",
      salary: 130000,
      experience_level: "Senior",
      location: "New York, NY"
    });

    const job5 = await Job.create({
      job_title: "Software Engineer",
      description: `Can you spot poorly written code? Do you look at challenges as opportunities instead of roadblocks? Would you like the chance to work with multiple Fortune 500 clients in a given year? If you answered "yes" to any of these questions, consider becoming a ThoughtWorker. We are a global software consultancy and a community of passionate, purpose-led individuals. We think disruptively to deliver technology to address our clients' toughest challenges, all while seeking to revolutionize the IT industry and create positive social change. Our software consultants work on a wide variety of projects alongside and for our clients. You could influence the digital strategy of a retail giant, build a new mobile application for a bank or redesign platforms using event sourcing and intelligent data pipelines. You’ll use the latest Lean and Agile thinking, solve mission-critical problems and challenge yourself every day.`,
      employee_status: "Full Time",
      salary: 80000,
      experience_level: "Junior",
      location: "Denver, CO"
    });

    const job6 = await Job.create({
      job_title: "Web Developer",
      description: `We're looking for top talent in the CI/CD field as we build out a world class platform team that helps support one of the largest and fastest growing companies on the planet: the We company. Do you want to solve some of the most challenging problems in the world? Do you want to become part of a team that values technical skills, while always maintaining a cultural focus on teamwork and collaboration? Then join us at the We company as we combine both the IT and physical infrastructure that not only supports some of the largest companies today, but more importantly provides a foundation and an environment to foster the next generation of people building the software and services that will enrich all of our lives for generations to come!`,
      employee_status: "Full Time",
      salary: 80000,
      experience_level: "Mid-Level",
      location: "New York, NY"
    });

    const job7 = await Job.create({
      job_title: "Software Engineer",
      description: `We're looking for top engineering talent to join our small, customer-driven development teams to work on a variety of projects. At HubSpot, apps are owned and developed by small, autonomous, cross-functional teams. You and your team set the goals, set the timelines, build the software, go to user tests, and carry the pager. Instead of trying to fill specific titles, we hire talented people at all seniority levels and work with them to find the role that suits them best. If you like the sound of engineering at HubSpot, please apply here so we can learn more about you.`,
      employee_status: "Full Time",
      salary: 100000,
      experience_level: "Mid-Level",
      location: "Boston, MA"
    });

    const job8 = await Job.create({
      job_title: "Web Developer",
      description: `Drift is looking for a Junior Web Developer to join our team responsible for client facing products. Drift has extremely aggressive revenue growth goals and our Growth team is instrumental in the success of our team. Our VP of Growth has crazy ideas that surprisingly work, and we need great engineers to make the ideas reality As a Senior Engineer on the growth team, you will be working closely with both the VP and the team leads to design, build, and deploy high impact projects on a daily basis.`,
      employee_status: "Full Time",
      salary: 70000,
      experience_level: "Junior",
      location: "Boston, MA"
    });

    const job9 = await Job.create({
      job_title: "Web Developer",
      description: `Can you spot poorly written code? Do you look at challenges as opportunities instead of roadblocks? Would you like the chance to work with multiple Fortune 500 clients in a given year? If you answered "yes" to any of these questions, consider becoming a ThoughtWorker. We are a global software consultancy and a community of passionate, purpose-led individuals. We think disruptively to deliver technology to address our clients' toughest challenges, all while seeking to revolutionize the IT industry and create positive social change. Our web developers work on a wide variety of projects alongside and for our clients. You could influence the digital strategy of a retail giant, build a new mobile application for a bank or redesign platforms using event sourcing and intelligent data pipelines. You’ll use the latest Lean and Agile thinking, solve mission-critical problems and challenge yourself every day.`,
      employee_status: "Full Time",
      salary: 65000,
      experience_level: "Junior",
      location: "Denver, CO"
    });

    const job10 = await Job.create({
      job_title: "Software Engineer",
      description: 'Drift is looking for a Senior Back-End Software Engineer to join our Growth team responsible for conversion and revenue. Drift has extremely aggressive revenue growth goals and our Growth team is instrumental in the success of our team. Our VP of Growth has crazy ideas that surprisingly work, and we need great engineers to make the ideas reality As a Senior Engineer on the growth team, you will be working closely with both the VP and the team leads to design, build, and deploy high impact projects on a daily basis.',
      employee_status: "Full Time",
      salary: 70000,
      experience_level: "Senior",
      location: "Boston, MA"
    });

    await company1.setJobs([job1, job4]);
    await company2.setJobs([job2, job6]);
    await company3.setJobs([job3, job7]);
    await company4.setJobs([job8, job10]);
    await company5.setJobs([job5, job9]);

    process.exit();

  } catch (e) {
    console.error(e);
  }
}

seed();
