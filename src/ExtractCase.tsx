
import { useState } from "react";
// @ts-ignore
import caseStudy from "case-study"

const PLACEHOLDER = `This tool extracts upper and lower case words from a text. `

function UpperLowerCase() {
  const [text, setText] = useState("");
  const [uppercaseWords, setUppercaseWords] = useState([]);
  const [lowercaseWords, setLowercaseWords] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText((event.target.value));
    
    const ucWords = caseStudy.findUpperCase(event.target.value);
    const lcWords = caseStudy.findLowerCase(event.target.value);

    if (!event.target.value) {
      setUppercaseWords([]);
      setLowercaseWords([]);
    }
    else {
      setUppercaseWords(ucWords || []);
      setLowercaseWords(lcWords || []);   
    }
  }

  return (
    <div className="flex flex-col space-y-10 sm-full md:w-3/5 lg:w-2/4">
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter text with upper or lower case words</label>
        <textarea id="message" rows={7} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-transparent-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={PLACEHOLDER}></textarea>
      </div>

      <div className="min-h-24 pb-7">

        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Uppercase Words</label>
        <div id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={text ? "" : "107,7"}>
          {
            uppercaseWords.map((r: string, index) => <div key={index}>{r}</div>)
          }
        </div>
      </div>

      <div className="min-h-24 pb-7">

        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lowercase Words</label>
        <div id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={text ? "" : "107,7"}>
          {
            lowercaseWords.map((r: string, index) => <div key={index}>{r}</div>)
          }
        </div>
      </div>

    </div>
  );
}

export default UpperLowerCase;
