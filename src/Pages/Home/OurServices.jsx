import { Accordion } from "flowbite-react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
const OurServices = () => {
  return (
    <div>
      <h3 className="text-3xl text-center font-bold bg-orange-500 text-white rounded-full py-3 md:w-1/2 mx-auto mt-4">
        Frequently asked questions
      </h3>
      <div className="my-container md:my-20 md:flex gap-5 items-center">
        <img
          className="md:w-1/2 rounded-lg"
          src="https://img.freepik.com/free-photo/media-marketing-internet-digital-global_53876-132202.jpg?w=740&t=st=1684662521~exp=1684663121~hmac=d87a719e1ff9d91a73c6046ca8c49e7d903f9873f99e36cf86222c91727c5e87"
          alt=""
        />
        <div className="md:w-1/2">
          <Accordion collapseAll={true} arrowIcon={HiOutlineArrowCircleDown}>
            <Accordion.Panel>
              <Accordion.Title>
                What services do we provide to customers?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Apart from offering a diverse range of toys, we provide
                  excellent customer services to enhance your experience. Our
                  services include knowledgeable and friendly customer support
                  to assist with inquiries and product recommendations. We also
                  offer hassle-free returns and exchanges, ensuring customer
                  satisfaction.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Are there any warranties or guarantees on ours toys?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, we stand behind the quality of our toys. Most of our
                  products come with a manufacturer warranty that covers any
                  defects in materials or workmanship. If you encounter any
                  issues with your toy purchase, please reach out to our
                  customer support team, and we will assist you in resolving the
                  matter, which may involve repair, replacement, or refund,
                  depending on the specific circumstances.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Do offer international shipping for your toys?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, we offer international shipping to customers around the
                  world. Whether you are located in North America, Europe, Asia,
                  or elsewhere, we strive to deliver our toys to your doorstep.
                  Please note that international shipping fees and delivery
                  times may vary depending on your location. Feel free to
                  contact our customer support team for more specific
                  information regarding international orders.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title>
                How can you contact ours company customer support?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  You can easily reach our customer support team by phone at
                  [phone number] or by email at [email address]. Our friendly
                  and knowledgeable representatives are ready to assist you with
                  any inquiries, concerns, or product-related questions you may
                  have.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
