import React, { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: 'Urban Elegance',
      category: 'Fashion Film',
      imageUrl: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1887&auto=format&fit=crop',
    },
    {
      title: 'TechNova Launch',
      category: 'Corporate Event',
      imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    },
    {
      title: 'Midnight Bloom',
      category: 'Music Video',
      imageUrl: 'https://images.unsplash.com/photo-1695014549564-d4c2479b6e32?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'The Wanderer',
      category: 'Documentary Short',
      imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Evermore Gala',
      category: 'Event Highlight',
      imageUrl: 'https://images.unsplash.com/photo-1746901252480-123b6a0ed115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Project Phoenix',
      category: 'Brand Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  // Effect to prevent body scroll when the modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);


  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="py-20 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group relative block w-full h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transition-transform duration-300 ease-out group-hover:-translate-y-4">
                    <p className="text-sm font-semibold text-purple-400 mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative bg-[#111827] rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-zoom-in"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <div className="w-full h-full">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </div>
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm font-semibold text-purple-400 mb-1">{selectedProject.category}</p>
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;

