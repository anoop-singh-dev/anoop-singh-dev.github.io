import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Blogs = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="blogs"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Blogs
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Write
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
        <Card
        imageUrl="https://miro.medium.com/v2/resize:fit:828/format:webp/1*GbNADF0_d3OQQAtsHQo-AA.png"
        title="Text summarization using NLP"
        description="Text summarization is the process of generating short, fluent, and most importantly accurate summary of a respectively longer text document."
        link="https://medium.com/analytics-vidhya/text-summarization-using-nlp-3e85ad0c6349"
         />
        <Card
        imageUrl="https://miro.medium.com/v2/resize:fit:828/format:webp/1*nbyKjUXHHvJesxAT0aCenQ.jpeg"
        title="Fine-tuning a large language model (LLM)"
        description="Fine-tuning a large language model (LLM) like a Hugging Face model involves adapting a pre-trained model to a specific task using a custom dataset. This process typically requires adjusting the model’s weights based on your labeled dataset, allowing it to learn task-specific patterns..."
        link="https://medium.com/@anoop-singh-dev/fine-tuning-a-large-language-model-llm-3013c2bcee1e"
        />
        <Card
        imageUrl="https://miro.medium.com/v2/resize:fit:588/format:webp/1*DP6RYDgDlUrTeYDjPuIhvg.jpeg"
        title="Shimmer UI: A Better Way to Show Loading States"
        description="If you have ever used a web or mobile app that takes some time to load data from a server, you might have seen a loading spinner..."
        link="https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17"
        />
        <Card
        imageUrl="https://miro.medium.com/v2/resize:fit:828/format:webp/1*NNfKH_EaFZLkxHULjkLCuA.png"
        title="Regression:Machine Learning"
        description="Regression models (both linear and non-linear) are used for predicting a real value, like salary for example..."
        link="https://medium.com/@anoop-singh-dev/regression-c243078d9eb6"
        />
        <Card
        imageUrl="https://miro.medium.com/v2/resize:fit:828/format:webp/1*lszGzF3L-Sgko2EYLOgLvQ.jpeg"
        title="Classification:Machine Learning"
        description="Unlike regression where you predict a continuous number, you use classification to predict a category..."
        link="https://medium.com/@anoop-singh-dev/classification-machine-learning-e1ad87dca690"
        />

        </div>
        <a
          href="https://medium.com/@anoop-singh-dev" target="_blank" rel="noopener noreferrer"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
