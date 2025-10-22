import React, { useState, useEffect } from 'react';

const TicketList = ({ setInProgressCount, setResolvedCount }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [taskStatusTickets, setTaskStatusTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FarhanShuvon/ticket-data/refs/heads/main/tickets.json')
      .then(res => res.json())
      .then(data => {
        const nonResolvedTickets = data.tickets.filter(t => t.status !== 'Resolved');
        setAllTickets(nonResolvedTickets);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
        setLoading(false);
      });
  }, []);

  // Update counts whenever taskStatusTickets or resolvedTickets change
  useEffect(() => {
    setInProgressCount(taskStatusTickets.length);
  }, [taskStatusTickets, setInProgressCount]);

  useEffect(() => {
    setResolvedCount(resolvedTickets.length);
  }, [resolvedTickets, setResolvedCount]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'text-red-600';
      case 'High':
        return 'text-red-500';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Open':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium whitespace-nowrap">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Open
          </span>
        );
      case 'In-Progress':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium whitespace-nowrap">
            <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
            In-Progress
          </span>
        );
      case 'Resolved':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium whitespace-nowrap">
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            Resolved
          </span>
        );
      default:
        return null;
    }
  };

  const handleAddToTaskStatus = (ticket) => {
    if (!taskStatusTickets.find(t => t.id === ticket.id)) {
      setTaskStatusTickets([...taskStatusTickets, ticket]);
    }
  };

  const handleComplete = (ticketId) => {
    const ticket = taskStatusTickets.find(t => t.id === ticketId);
    if (ticket) {
      setTaskStatusTickets(taskStatusTickets.filter(t => t.id !== ticketId));
      setResolvedTickets([...resolvedTickets, { ...ticket, status: 'Resolved' }]);
      setAllTickets(allTickets.filter(t => t.id !== ticketId));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading tickets...</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 px-4 sm:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side - Customer Tickets */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allTickets.map(ticket => (
                <div 
                  key={ticket.id} 
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 cursor-pointer"
                  onClick={() => handleAddToTaskStatus(ticket)}
                >
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      {ticket.title}
                    </h3>
                    {getStatusBadge(ticket.status)}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {ticket.description}
                  </p>

                  <div className="flex items-center justify-between text-sm pt-2">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500">#{ticket.id}</span>
                      <span className={`font-semibold uppercase text-xs ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority === 'Critical' ? 'HIGH PRIORITY' : `${ticket.priority.toUpperCase()} PRIORITY`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600">{ticket.customer}</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{formatDate(ticket.createdAt)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Task Status */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Task Status</h2>
            
            {taskStatusTickets.length === 0 ? (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                <p className="text-gray-500 text-center py-8">
                  Select a ticket to add to Task Status
                </p>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {taskStatusTickets.map(ticket => (
                  <div key={ticket.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {ticket.title}
                    </h3>
                    <button
                      onClick={() => handleComplete(ticket.id)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Resolved Task</h2>
              {resolvedTickets.length === 0 ? (
                <div className="bg-gray-100 rounded-lg p-6">
                  <p className="text-gray-500">No resolved tasks yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {resolvedTickets.map(ticket => (
                    <div key={ticket.id} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <h3 className="text-base font-semibold text-gray-900">
                        {ticket.title}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TicketList;
