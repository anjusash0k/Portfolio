import {  useState } from "react";


const Research = () => {
    const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleAbstract1 = () => setIsExpanded1(!isExpanded1);
  const toggleAbstract2 = () => setIsExpanded2(!isExpanded2);
  return (
    <div>
       <section id="research" className=" py-16 px-8 bg-black/50">
          <h2 className="text-4xl font-bold text-center text-white mb-10">
            Research Papers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Research Paper 1 */}
            <div className="bg-[#F3F4F6] rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Leveraging Technology to Empower Millet Farmers: A
                  Retrieval-Augmented Generation Approach with Large Language
                  Models
                </h3>
                <p className="font-semibold">5th GCAT 2024 - IEEE</p>
                <p className="text-gray-600">
                  {isExpanded1
                    ? "This research addresses the critical need to bridge the gap between traditional agricultural knowledge and modern findings, particularly focusing on millet cultivation in India. Millet, being a staple grain in the region, holds significant importance for both farmers and agricultural researchers. However, the lack of accessible technology exacerbates the dissemination of crucial information to farmers. To tackle this challenge, our study proposes a comprehensive solution leveraging cutting-edge technologies such as Large Language Models (LLMs), Prompting, and vector database management. The core of our approach centers on the utilization of RAG techniques, which involves scraping and segmenting millet-related data into manageable chunks. These chunks are then transformed into vectors using LLMs and stored in the vector database. Similarity measures such as cosine similarity to obtain relevant vectors in response to questions posed by farmers. Prompting is then employed to provide responses that understood by humans. Crucially, the technology prevents the spread of false information by refusing to respond to questions that are not related to agriculture, thus guaranteeing accuracy."
                    : "This research addresses the critical need to bridge the gap between traditional agricultural knowledge and modern findings, particularly focusing on millet cultivation in India. Millet, being a staple grain in the region, holds significant importance for both farmers and agricultural researchers..."}
                </p>
                <button
                  className="text-blue-500 hover:text-blue-700 mt-2"
                  onClick={toggleAbstract1}
                >
                  {isExpanded1 ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Research Paper 2 */}
            <div className="bg-[#F3F4F6] rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Comparison of Different BERT Models for Document Clustering
                </h3>
                <p className="font-semibold">4th ASIANCON 2024 Team - IEEE</p>
                <p className="text-gray-600">
                  {isExpanded2
                    ? "Abstract—Our study focused on evaluating the performance of four state-of-the-art word embedding models viz., Uncased version of BERT, ALBert, DistillBert, and BioBert. These models employ distinct methodologies to embed words into vector representations, thereby potentially influencing the quality of resultant word clusters. By systematically comparing these models, we aimed to discern their respective strengths and weaknesses in producing cohesive and semantically meaningful word groupings. The outcomes of our comparative study provide valuable insights into the performance and applicability of different word embedding models for unsupervised word clustering tasks. Performance evaluation is conducted using the evaluation metrics like F1 score, precision and recall. A subset of the FAO dataset has been carefully selected for the experiments. Among them are the distinct domains of livestock, forestry, land and soil, and fisheries, all of which fall under the larger category of FAO. Through an averaged assessment of performance metrics across all models, we determine BERT-Uncased as the optimal choice for FAO data classification tasks. The model reported a macro-average F-measure of 83% in clustering domain specific text documents."
                    : "Abstract—Our study focused on evaluating the performance of four state-of-the-art word embedding models viz., Uncased version of BERT, ALBert, DistillBert, and BioBert. These models employ distinct methodologies to embed words into vector representations, thereby potentially influencing the quality of resultant word clusters..."}
                </p>
                <button
                  className="text-blue-500 hover:text-blue-700 mt-2"
                  onClick={toggleAbstract2}
                >
                  {isExpanded2 ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Research
