// import React, { useState, useEffect, useCallback } from "react";
// import {
//   Mail,
//   LinkedinIcon,
//   Twitter,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
//
// // Custom hook for single slide carousel
// const useSlider = (totalItems) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//
//   const next = useCallback(() => {
//     if (isAnimating) return;
//
//     setIsAnimating(true);
//     setCurrentIndex((prev) => {
//       const nextIndex = prev + 1;
//       // If we reach the end, return to first slide
//       return nextIndex >= totalItems ? 0 : nextIndex;
//     });
//
//     setTimeout(() => setIsAnimating(false), 500);
//   }, [totalItems, isAnimating]);
//
//   const prev = useCallback(() => {
//     if (isAnimating) return;
//
//     setIsAnimating(true);
//     setCurrentIndex((prev) => {
//       const prevIndex = prev - 1;
//       // If we go before first slide, go to last slide
//       return prevIndex < 0 ? totalItems - 1 : prevIndex;
//     });
//
//     setTimeout(() => setIsAnimating(false), 500);
//   }, [totalItems, isAnimating]);
//
//   // Touch handlers for mobile swipe
//   const onTouchStart = (e) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };
//
//   const onTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };
//
//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//
//     const distance = touchStart - touchEnd;
//     const minSwipeDistance = 50;
//
//     if (distance > minSwipeDistance) {
//       next();
//     } else if (distance < -minSwipeDistance) {
//       prev();
//     }
//   };
//
//   return {
//     currentIndex,
//     isAnimating,
//     next,
//     prev,
//     touchHandlers: {
//       onTouchStart,
//       onTouchMove,
//       onTouchEnd,
//     },
//   };
// };
//
// const Teachers = () => {
//   const { currentIndex, isAnimating, next, prev, touchHandlers } = useSlider(
//     teachersData.length,
//   );
//
//   // Auto-advance effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isAnimating) {
//         next();
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isAnimating, next]);
//
//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-800 lg:py-24">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="mb-12 text-center">
//           <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
//             O'qituvchilar
//           </h2>
//           <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
//             Bizning malakali va tajribali o'qituvchilar jamoasi bilan tanishing
//           </p>
//         </div>
//
//         {/* Slider Container */}
//         <div className="relative px-4">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prev}
//             disabled={isAnimating}
//             className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 md:-left-4 lg:-left-6"
//             aria-label="Previous"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//           </button>
//
//           <button
//             onClick={next}
//             disabled={isAnimating}
//             className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 md:-right-4 lg:-right-6"
//             aria-label="Next"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//           </button>
//
//           {/* Slider */}
//           <div className="overflow-hidden" {...touchHandlers}>
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${currentIndex * 100}%)`,
//                 width: `${teachersData.length * 100}%`,
//               }}
//             >
//               {teachersData.map((teacher) => (
//                 <div key={teacher.id} className="w-full px-3">
//                   <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
//                     <div className="flex flex-col md:flex-row">
//                       {/* Teacher Image */}
//                       <div className="aspect-square w-full md:w-2/5">
//                         <img
//                           src={teacher.image}
//                           alt={teacher.name}
//                           className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//                           loading="lazy"
//                         />
//                       </div>
//
//                       {/* Teacher Info */}
//                       <div className="flex-1 p-6">
//                         <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
//                           {teacher.name}
//                         </h3>
//                         <p className="mb-3 text-lg font-medium text-blue-600 dark:text-blue-400">
//                           {teacher.designation}
//                         </p>
//                         <p className="mb-4 text-gray-600 dark:text-gray-300">
//                           {teacher.bio}
//                         </p>
//
//                         {/* Social Links */}
//                         <div className="mt-auto flex items-center space-x-4 border-t border-gray-200 pt-4 dark:border-gray-700">
//                           <a
//                             href={`mailto:${teacher.email}`}
//                             className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
//                             aria-label={`Email ${teacher.name}`}
//                           >
//                             <Mail className="h-5 w-5" />
//                           </a>
//                           <a
//                             href={teacher.linkedin}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
//                             aria-label={`${teacher.name}'s LinkedIn profile`}
//                           >
//                             <LinkedinIcon className="h-5 w-5" />
//                           </a>
//                           <a
//                             href={`https://twitter.com/${teacher.twitter}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
//                             aria-label={`${teacher.name}'s Twitter profile`}
//                           >
//                             <Twitter className="h-5 w-5" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//
//           {/* Slide Indicators */}
//           <div className="mt-6 flex justify-center space-x-2">
//             {teachersData.map((_, index) => (
//               <button
//                 key={index}
//                 className={`h-2 w-2 rounded-full transition-all ${
//                   currentIndex === index
//                     ? "w-4 bg-blue-600"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 onClick={() => {
//                   if (!isAnimating) {
//                     setCurrentIndex(index);
//                   }
//                 }}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Teachers;
"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LinkedinIcon,
  Mail,
  MoreHorizontal,
  Twitter,
} from "lucide-react";
import teachersData from "@/components/Teachers/teachersData";

// Custom hook for handling responsive items per page
const useResponsiveItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Mobile: 1 item, Laptop and above: 3 items
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
};

// Pagination Button Component
const PaginationButton = ({
  children,
  onClick,
  isActive = false,
  disabled = false,
  className = "",
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex h-9 min-w-9 items-center justify-center rounded-md px-3.5
      text-sm font-medium transition-colors
      ${
        isActive
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      }
      ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      ${className}
    `}
  >
    {children}
  </button>
);

// Pagination Component
const Pagination = ({
  totalItems,
  currentPage,
  onPageChange,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        return [1, 2, 3, "dots", totalPages];
      } else if (currentPage >= totalPages - 2) {
        return [1, "dots", totalPages - 2, totalPages - 1, totalPages];
      } else {
        return [
          1,
          "dots",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "dots",
          totalPages,
        ];
      }
    }
    return pageNumbers;
  };

  return (
    <nav
      className="flex items-center justify-center space-x-2"
      role="navigation"
      aria-label="Pagination"
    >
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </PaginationButton>

      <div className="flex items-center space-x-2">
        {getPageNumbers().map((page, index) => {
          if (page === "dots") {
            return (
              <span
                key={`dots-${index}`}
                className="flex h-9 items-center justify-center px-1"
              >
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </span>
            );
          }

          return (
            <PaginationButton
              key={page}
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </PaginationButton>
          );
        })}
      </div>

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </PaginationButton>
    </nav>
  );
};

// Main Teachers Component
const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useResponsiveItemsPerPage();

  // Reset current page when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = teachersData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-800 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
            O'qituvchilar
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Bizning malakali va tajribali o'qituvchilar jamoasi bilan tanishing
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {currentTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              {/* Teacher Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  {teacher.name}
                </h3>
                <p className="mb-3 font-medium text-blue-600 dark:text-blue-400">
                  {teacher.designation}
                </p>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {teacher.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <a
                    href={`mailto:${teacher.email}`}
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label={`Email ${teacher.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={teacher.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label={`${teacher.name}'s LinkedIn profile`}
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://twitter.com/${teacher.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label={`${teacher.name}'s Twitter profile`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination
            totalItems={teachersData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Teachers;
