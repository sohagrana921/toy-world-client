import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-container  border">
      <div>
        <h3 className="text-3xl text-center font-bold bg-orange-500 text-white rounded-full py-3 md:w-1/2 mx-auto my-8">
          Answer Some Question:-
        </h3>

        <div className=" mt-12 p-10 bg-slate-200 text-black rounded-lg">
          <h3 className="text-2xl font-bold">
            1. TWhat is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="text-xl font-semibold">
            Ans:- <br />
            <span>
              <span className="font-bold underline">Access Token:</span>
              <br /> An access token is a credential that is issued by an
              authentication server upon successful authentication of a user or
              client application. It is a string of characters that represents
              the authorization granted to access specific resources or perform
              certain actions. Access tokens have an expiration time and are
              used to authenticate and authorize requests to protected APIs or
              services. They are typically included in the header or as a
              parameter of API requests. <br />
              <span className="font-bold my-2 underline">
                Refresh Token:
              </span>{" "}
              <br /> A refresh token is a long-lived credential that is also
              issued by the authentication server alongside the access token.
              While access tokens have a shorter lifespan, refresh tokens are
              used to obtain new access tokens once the original access token
              expires. They are securely stored and sent to the authentication
              server to request a new access token when needed, without
              requiring the user to reauthenticate. <br /> <br />
              1.1 Authentication: The user or client application provides their
              credentials to the authentication server. <br />
              <br /> 2.2 Token Issuance: Upon successful authentication, the
              authentication server generates an access token and a refresh
              token. <br /> <br />
              3.3 Access Token Usage: The client application includes the access
              token in API requests to access protected resources. Token <br />
              <br />
              4.4 Expiration: The access token has a limited lifespan, after
              which it becomes invalid.
            </span>
          </p>
        </div>

        <div className=" mt-4 p-10 bg-slate-200 text-black rounded-lg">
          <h3 className="text-2xl font-bold">
            2. Compare SQL and NoSQL databases?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-
            <span>
              SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
              are two different types of database management systems that differ
              in their data models, querying languages, and scalability. SQL
              databases follow a structured data model based on tables with
              predefined schemas, enforcing rigid schemas and using SQL as the
              standard query language. They are well-suited for applications
              with structured data, complex relationships, and strict data
              consistency requirements. On the other hand, NoSQL databases
              embrace various data models and offer more flexibility, allowing
              for unstructured or semi-structured data without predefined
              schemas. They often use proprietary query languages or simplified
              APIs tailored to their specific data models. NoSQL databases are
              designed for scalability, allowing for horizontal scaling across
              multiple servers or clusters, and they excel in handling large
              volumes of rapidly changing or unstructured data. They are
              commonly used in scenarios that require high scalability,
              low-latency retrieval, and flexible data models, such as social
              networks, real-time analytics, and content management systems. The
              choice between SQL and NoSQL databases depends on factors like
              data structure, scalability needs, querying requirements, and
              development complexity, and its essential to consider these
              factors when deciding the most suitable database solution for an
              application.
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10 bg-slate-200 text-black rounded-lg">
          <h3 className="text-2xl font-bold">
            3. What is express js? What is Nest JS?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-
            <span>
              Express.js is a lightweight and flexible framework that focuses on
              simplicity and gives developers full control over the application,
              while Nest.js is an opinionated framework built on top of
              Express.js that provides a structured and scalable approach with
              additional features and architectural patterns. The choice between
              Express.js and Nest.js depends on the specific requirements and
              preferences of the project, including the level of structure and
              scalability needed.
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10 bg-slate-200 text-black rounded-lg">
          <h3 className="text-2xl font-bold">
            4. What is a custom hook, and why will we create a custom hookWhat
            is MongoDB aggregate and how does it work?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-{" "}
            <span>
              In MongoDB, the `aggregate` method is a powerful feature that
              enables complex data processing and analysis tasks on collections.
              By providing a flexible pipeline approach, the `aggregate` method
              allows for the sequential execution of various stages, each
              representing a specific operation in the data processing workflow.
              These stages can include filtering, grouping, sorting,
              transforming, and aggregating data. With the `aggregate` method,
              you can apply a series of stages to your data, with the output of
              one stage serving as the input for the next. This allows for
              efficient and comprehensive data manipulations and calculations
              directly within the database. The result is a transformed and
              aggregated dataset that meets specific criteria, making the
              `aggregate` method a valuable tool for advanced data analysis and
              reporting in MongoDB.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
