import React from 'react';
import { Phone, Mail, Building2, Calendar } from 'lucide-react';
import { Customer } from '../types/customer';

interface CustomerCardProps {
  customer: Customer;
  onEdit: (customer: Customer) => void;
  onDelete: (id: string) => void;
}

export function CustomerCard({ customer, onEdit, onDelete }: CustomerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {customer.firstName} {customer.lastName}
          </h3>
          {customer.company && (
            <div className="flex items-center text-gray-600 mt-1">
              <Building2 className="w-4 h-4 mr-2" />
              <span>{customer.company}</span>
            </div>
          )}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            customer.status === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {customer.status}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Mail className="w-4 h-4 mr-2" />
          <a href={`mailto:${customer.email}`} className="hover:text-blue-600">
            {customer.email}
          </a>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          <a href={`tel:${customer.phone}`} className="hover:text-blue-600">
            {customer.phone}
          </a>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Last Contact: {new Date(customer.lastContact).toLocaleDateString()}</span>
        </div>
      </div>

      {customer.notes && (
        <div className="mt-4 p-3 bg-gray-50 rounded-md text-gray-600 text-sm">
          {customer.notes}
        </div>
      )}

      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={() => onEdit(customer)}
          className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(customer.id)}
          className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}