import React, { useEffect, useState } from 'react'
import { fetchUserData } from 'services/api/auth'
import { createColumnHelper } from '@tanstack/react-table'
import Table from 'common/components/atoms/Table'

// Define the Person type matching your API response
type Person = {
  passengerName: string
  airlineName: string
  trips: number
  airlineHeadQuaters: string
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('passengerName', {
    header: () => 'Passenger Name',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineName', {
    header: () => 'Airline',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('trips', {
    header: () => 'Trips',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineHeadQuaters', {
    header: () => 'Headquarters',
    cell: (info) => info.renderValue(),
  }),
]

const DashboardTable = () => {
  const [data, setData] = useState<Person[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchUserData()
        
        // Extract the data array from the response
        if (response && response.data) {
          setData(response.data) // No need to transform since fields match
        } else {
          throw new Error('Invalid API response structure')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return <Table data={data} columns={columns} />
}

export default DashboardTable