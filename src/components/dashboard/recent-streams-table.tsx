import { DataTable } from '@/components/data-table'
import { columns } from '@/lib/columns'

export type SongPlay = {
  id: string
  song: string
  artist: string
  date: Date
  user: string
}

const songPlays: SongPlay[] = [
  {
    id: '728ed52f',
    song: 'Cruel Summer',
    artist: 'Taylor Swift',
    date: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    user: 'acmecorp@example.com',
  },
  {
    id: '489e1d42',
    song: 'vampire',
    artist: 'Olivia Rodrigo',
    date: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    user: 'johnnyappleseed@gmail.com',
  },
  {
    id: '1234567890',
    song: 'Last Night',
    artist: 'Morgan Wallen',
    date: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    user: 'user123@gmail.com',
  },
  {
    id: 'abc123def',
    song: 'Flowers',
    artist: 'Miley Cyrus',
    date: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
    user: 'miley_fan99@yahoo.com',
  },
  {
    id: '456def789',
    song: 'Anti-Hero',
    artist: 'Taylor Swift',
    date: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    user: 'swiftie4life@gmail.com',
  },
  {
    id: '987fed321',
    song: 'Kill Bill',
    artist: 'SZA',
    date: new Date(Date.now() - 1000 * 60 * 75), // 1 hour 15 minutes ago
    user: 'musiclover@hotmail.com',
  },
  {
    id: 'xyz789abc',
    song: 'Rich Flex',
    artist: 'Drake',
    date: new Date(Date.now() - 1000 * 60 * 90), // 1 hour 30 minutes ago
    user: 'drake_stan@outlook.com',
  },
  {
    id: '741qwe852',
    song: 'As It Was',
    artist: 'Harry Styles',
    date: new Date(Date.now() - 1000 * 60 * 105), // 1 hour 45 minutes ago
    user: 'styles_forever@gmail.com',
  },
  {
    id: '963poi852',
    song: 'About Damn Time',
    artist: 'Lizzo',
    date: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
    user: 'lizzo_fan@yahoo.com',
  },
  {
    id: '159mnb753',
    song: 'Unholy',
    artist: 'Sam Smith',
    date: new Date(Date.now() - 1000 * 60 * 135), // 2 hours 15 minutes ago
    user: 'music_addict@gmail.com',
  },
]

export function RecentStreamsTable() {
  return <DataTable columns={columns} data={songPlays} />
}
